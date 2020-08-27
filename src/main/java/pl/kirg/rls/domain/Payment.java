package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity(name = "payments")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class Payment
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private Status paymentStatus;

    @Column(name = "response", nullable = false)
    private String responseFromProvider;

    @CreationTimestamp
    @DateTimeFormat
    @Column(nullable = false, updatable = false)
    private final Timestamp timestamp;

}
