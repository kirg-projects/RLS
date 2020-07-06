package pl.kirg.rls.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.net.MalformedURLException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class LinkGeneratorTest
{

    public static final int BEGIN_INDEX = 26;
    public static final String DOMAIN_IN_URL = "mydomain";

    @Autowired
    LinkGenerator linkGenerator;
    private String generatedUrl;

    @BeforeEach
    void setUp() throws MalformedURLException
    {
        this.generatedUrl = linkGenerator.joinDomainUrlToUniqueId()
                                         .toString();
    }

    @Test
    void linkGeneratorExists()
    {
        assertNotNull(linkGenerator);
    }

    @Test
    void domainExistsInUrl()
    {
        assertTrue(generatedUrl.contains(DOMAIN_IN_URL));
    }

    @Test
    void uuidExistsInUrl()
    {
        assertTrue(generatedUrl.substring(BEGIN_INDEX)
                               .matches("(\\d*\\w*.){5}"));
    }
}