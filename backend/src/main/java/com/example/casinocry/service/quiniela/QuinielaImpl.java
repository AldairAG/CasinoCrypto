package com.example.casinocry.service.quiniela;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.entities.Quiniela;
import com.example.casinocry.repository.EventoRepository;
import com.example.casinocry.repository.PrediccionRepository;
import com.example.casinocry.repository.QuinielaRepository;

import java.util.List;

@Service
public class QuinielaImpl implements QuinielaService {

    @Autowired
    private QuinielaRepository quinielaRepository;

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private PrediccionRepository prediccionRepository;

    @Override
    @Transactional
    public void createQuiniela(CreateQuinielaRequest request) {

    }

    @Override
    public void updateQuiniela() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateQuiniela'");
    }

    @Override
    public void deleteQuiniela(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteQuiniela'");
    }

    @Override
    public Quiniela getQuinielaById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getQuinielaById'");
    }

    @Override
    public List<Quiniela> getAllQuinielas() {
        // Obtener todas las quinielas de la base de datos
        return quinielaRepository.findAll();    
    }


    
}
