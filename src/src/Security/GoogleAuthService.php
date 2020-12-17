<?php

namespace App\Security;

use App\Entity\SocialUser;
use Google_Client;

class GoogleAuthService implements AuthServiceInterface
{
    private $client;

    public function __construct(Google_Client $client)
    {
        $client->addScope('email');
        $this->client = $client;
    }

    public function getUser(string $token): SocialUser
    {
        $payload = $this->client->verifyIdToken($token);

        $user = new SocialUser();
        $user->setEmail($payload['email']);
        $user->setName($payload['name']);

        return $user;
    }
}
