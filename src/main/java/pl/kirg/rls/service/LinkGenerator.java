package pl.kirg.rls.service;

import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.net.URL;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

@Service
public class LinkGenerator
{

    public static final String DOMAIN_URL = "http://mydomain.com/extra/";

    public long generateUniqueId() throws NoSuchAlgorithmException
    {
        return SecureRandom.getInstance("SHA1PRNG")
                           .longs(0, Long.MAX_VALUE)
                           .findFirst()
                           .orElseThrow();
    }

    public URL joinDomainUrlToUniqueId() throws NoSuchAlgorithmException, MalformedURLException
    {
        String uniqueId = String.valueOf(this.generateUniqueId());

        return new URL(DOMAIN_URL.concat(uniqueId));
    }
}
