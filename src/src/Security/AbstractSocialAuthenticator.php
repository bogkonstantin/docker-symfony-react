<?php

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\Authenticator\AbstractFormLoginAuthenticator;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

abstract class AbstractSocialAuthenticator extends AbstractFormLoginAuthenticator
{
    use TargetPathTrait;

    const INPUT_KEY = 'social_key';

    private $entityManager;
    private $urlGenerator;
    private $socialAuthService;
    private $request;

    public function __construct(
        EntityManagerInterface $entityManager,
        UrlGeneratorInterface $urlGenerator,
        AuthServiceInterface $authService
    )
    {
        $this->entityManager = $entityManager;
        $this->urlGenerator = $urlGenerator;
        $this->socialAuthService = $authService;
    }

    public function supports(Request $request)
    {
        $this->request = $request;
        $loginOrRegister = in_array($request->attributes->get('_route'), ['app_login', 'app_register']);
        return $loginOrRegister && $request->isMethod('POST') && $request->get(static::INPUT_KEY);
    }

    public function getUser($token, UserProviderInterface $userProvider)
    {
        $socialUser = $this->socialAuthService->getUser($token);

        if (empty($socialUser->getEmail())) {
            throw new CustomUserMessageAuthenticationException('No email provided by Facebook');
        }

        try {
            $user = $userProvider->loadUserByUsername($socialUser->getEmail());
        } catch (UsernameNotFoundException $exception) {
            $user = new User();
            $user->setEmail($socialUser->getEmail());
            $user->setVerified(true);
            $user->setLanguageCode($this->request->getLocale());
            $this->entityManager->persist($user);
            $this->entityManager->flush();
        }

        if (!$user) {
            throw new CustomUserMessageAuthenticationException(
                'No user found, try again later or use login-password'
            );
        }

        return $user;
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        return true;
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function getPassword($credentials): ?string
    {
        return null;
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        if ($targetPath = $this->getTargetPath($request->getSession(), $providerKey)) {
            return new RedirectResponse($targetPath);
        }

        return new RedirectResponse($this->urlGenerator->generate('app_dashboard'));
    }

    protected function getLoginUrl()
    {
        return $this->urlGenerator->generate('app_login');
    }
}
