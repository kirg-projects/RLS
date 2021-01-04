package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import lombok.Setter;
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
import javax.validation.constraints.NotNull;

@Data
@Entity(name = "payments")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
@Getter
@Setter
public class Payment
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status paymentStatus;

    @NotNull
    @Column(name = "response")
    private String responseFromProvider;

    @CreationTimestamp
    @DateTimeFormat
    @Column(updatable = false)
    private final Timestamp registered;

    public Payment(Timestamp registered)
    {
        this.registered = registered;
    }

    @Override
    public String toString()
    {
        return "Payment{" +
               "id=" + id +
               ", paymentStatus=" + paymentStatus +
               ", responseFromProvider='" + responseFromProvider + '\'' +
               ", timestamp=" + registered +
               '}';
    }
}
