<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\Request;

class GoogleAuthenticator extends AbstractSocialAuthenticator
{
    const INPUT_KEY = 'googleAuthResponse';

    public function getCredentials(Request $request)
    {
        return $request->get(static::INPUT_KEY);
    }
}
