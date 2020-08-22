package pl.kirg.rls.config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
public class JpaConfig
{
    @Bean
    public DataSource getDataSource()
    {
        return DataSourceBuilder.create()
                                .driverClassName("org.hsqldb.jdbc.JDBCDriver")
                                .url("jdbc:hsqldb:file:./target/hypersql")
                                .username("root")
                                .password("")
                                .build();
    }

    @Bean
    public HibernateJpaVendorAdapter hibernateJpaVendorAdapter()
    {
        HibernateJpaVendorAdapter hibernateAdapter = new HibernateJpaVendorAdapter();
        hibernateAdapter.setGenerateDdl(false);
        hibernateAdapter.setShowSql(true);
        hibernateAdapter.setDatabase(Database.HSQL);

        return hibernateAdapter;
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory()
    {
        LocalContainerEntityManagerFactoryBean containerEntityManager = new LocalContainerEntityManagerFactoryBean();
        containerEntityManager.setPackagesToScan("pl.kirg.rls");
        containerEntityManager.setDataSource(this.getDataSource());
        containerEntityManager.setJpaVendorAdapter(this.hibernateJpaVendorAdapter());

        return containerEntityManager;
    }

    @Bean
    public PlatformTransactionManager transactionManager()
    {
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(this.entityManagerFactory().getObject());

        return txManager;
    }
}
