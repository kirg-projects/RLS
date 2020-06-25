package pl.kirg.rls.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.net.MalformedURLException;
import java.security.NoSuchAlgorithmException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class LinkGeneratorTest
{

    public static final int BEGIN_INDEX_NUMBER = 26;
    public static final String DOMAIN_IN_URL = "mydomain";

    @Autowired
    LinkGenerator linkGenerator;

    @Test
    void linkGeneratorExists()
    {
        assertNotNull(linkGenerator);
    }

    @Test
    void generatedUniqueIdIsGreaterThanZero() throws NoSuchAlgorithmException
    {
        long value = linkGenerator.generateUniqueId();
        assertTrue(value > 0);
    }

    @Test
    void domainExistsInUrl() throws MalformedURLException, NoSuchAlgorithmException
    {
        String fullUrl = linkGenerator.joinDomainUrlToUniqueId()
                                      .toString();

        assertTrue(fullUrl.contains(DOMAIN_IN_URL));
    }

    @Test
    void digitsExistsInUrl() throws MalformedURLException, NoSuchAlgorithmException
    {
        String fullUrl = linkGenerator.joinDomainUrlToUniqueId()
                                      .toString();

        assertTrue(fullUrl.substring(BEGIN_INDEX_NUMBER)
                          .matches("(\\d*)"));
    }
}