package pl.kirg.rls.config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig
{
    @Bean
    public DataSource getDataSource()
    {
        return DataSourceBuilder.create()
                                .driverClassName("org.sqlite.JDBC")
                                .url("jdbc:sqlite:./target/sqlite")
                                .username("SA")
                                .password("")
                                .build();
    }
}
