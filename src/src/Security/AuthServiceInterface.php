<?php

namespace App\Security;

use App\Entity\SocialUser;

interface AuthServiceInterface
{
    public function getUser(string $code): SocialUser;
}
