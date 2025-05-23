package com.example.casinocry.service.quiniela;

import java.util.List;

import com.example.casinocry.dto.request.ArmarQuinielaRequest;
import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.entities.Quiniela;

public interface QuinielaService {

    void createQuiniela(CreateQuinielaRequest request);

    void updateQuiniela();

    void deleteQuiniela(Long id);

    Quiniela getQuinielaById(Long id);

    List<Quiniela> getAllQuinielas();
    
    void armarQuiniela(ArmarQuinielaRequest request);

}
