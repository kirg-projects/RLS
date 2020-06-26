package pl.kirg.rls.service;

import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.UUID;

@Service
public class LinkGenerator
{

    public static final String DOMAIN_URL = "http://mydomain.com/extra/";

    public URL joinDomainUrlToUniqueId() throws MalformedURLException
    {
        String uuid = UUID.randomUUID().toString();

        return new URL(DOMAIN_URL.concat(uuid));
    }
}
