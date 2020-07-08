package pl.kirg.rls.config;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.test.jdbc.JdbcTestUtils;

import javax.sql.DataSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

@JdbcTest
class DatabaseTest
{
    private static final String TABLE_NAME = "MOCK_DATA";
    private final int defaultAllRows = 1000;
    private JdbcTemplate jdbcTemplate;

    @BeforeEach
    void setUp()
    {
        DataSource dataSource = new EmbeddedDatabaseBuilder().generateUniqueName(true)
                                                             .setType(EmbeddedDatabaseType.H2)
                                                             .setScriptEncoding("UTF-8")
                                                             .addScripts(TABLE_NAME.toLowerCase().concat(".sql"))
                                                             .ignoreFailedDrops(true)
                                                             .build();

        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Test
    public void countRowsInTableByJdbc()
    {
        int countRows = JdbcTestUtils.countRowsInTable(jdbcTemplate, TABLE_NAME);

        assertEquals(this.defaultAllRows, countRows);
    }

    @Test
    public void deleteFromTableWhereIdIsGreaterThan200ByJdbc()
    {
        final int expectedAfterWhereId = 200;
        JdbcTestUtils.deleteFromTableWhere(jdbcTemplate, TABLE_NAME, "id > 200");
        int countRows = JdbcTestUtils.countRowsInTable(jdbcTemplate, TABLE_NAME);

        assertEquals(expectedAfterWhereId, countRows);
    }

    @Test
    public void deleteFromTableWhereGenderEqualsFemaleByJdbc()
    {
        final int expectedAfterWhereGender = 492;
        JdbcTestUtils.deleteFromTableWhere(jdbcTemplate, TABLE_NAME, "gender = 'Female'");
        int countRows = JdbcTestUtils.countRowsInTable(jdbcTemplate, TABLE_NAME);

        assertEquals(expectedAfterWhereGender, countRows);
    }

    @Test
    public void dropTablesByJdbc()
    {
        JdbcTestUtils.dropTables(jdbcTemplate, TABLE_NAME);
    }

}
