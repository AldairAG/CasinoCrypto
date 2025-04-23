package com.example.casinocry.dto.request;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CreateQuinielaRequest {
    private Long idQuiniela;
    private Long idEvento;
    private boolean esDoble;
    private boolean esTriple;
}
