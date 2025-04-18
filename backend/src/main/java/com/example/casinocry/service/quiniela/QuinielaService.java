package com.example.casinocry.service.quiniela;

import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.entities.Quiniela;

public interface QuinielaService {

    void createQuiniela(CreateQuinielaRequest request);

    void updateQuiniela();

    void deleteQuiniela(Long id);

    Quiniela getQuinielaById(Long id);

}
