package com.example.casinocry.service.quiniela;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.entities.Evento;
import com.example.casinocry.entities.Quiniela;
import com.example.casinocry.repository.EventoRepository;
import com.example.casinocry.repository.QuinielaRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuinielaImpl implements QuinielaService {

    @Autowired
    private QuinielaRepository quinielaRepository;

    @Autowired
    private EventoRepository eventoRepository;

    @Override
    public void createQuiniela(CreateQuinielaRequest request) {
        // Crear una nueva instancia de Quiniela
        Quiniela quiniela = new Quiniela();
        quiniela.setNombreQuiniela(request.getNombreQuiniela());
        quiniela.setFechaInicio(request.getFechaInicio());
        quiniela.setFechaFin(request.getFechaFin());
        quiniela.setPrecioParticipacion(request.getPrecioParticipacion());
        quiniela.setStrDescripcion(request.getStrDescripcion());
        quiniela.setIntColumnas(request.getIntColumnas());
        quiniela.setAllowDoubleBets(request.getAllowDoubleBets());
        quiniela.setAllowTripleBets(request.getAllowTripleBets());
        quiniela.setTipoPremio(request.getTipoPremio());
        quiniela.setTiposApuestas(request.getTiposApuesta());

        // Lista para almacenar los eventos asociados a la quiniela
        List<Evento> eventos = new ArrayList<>();

        // Iterar sobre los IDs de los eventos proporcionados en la solicitud
        request.getEventos().forEach(eventoId -> {
            // Verificar si el evento ya existe en la base de datos
            Evento evento = eventoRepository.findById(eventoId).orElseGet(() -> {
                // Si no existe, crear un nuevo evento
                Evento nuevoEvento = new Evento();
                nuevoEvento.setIdEvento(eventoId);
                return eventoRepository.save(nuevoEvento); // Guardar el nuevo evento
            });

            // Agregar el evento (existente o nuevo) a la lista de eventos
            eventos.add(evento);
        });

        // Asociar los eventos a la quiniela
        quiniela.setEventos(eventos);

        // Guardar la quiniela con los eventos asociados
        quinielaRepository.save(quiniela);
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


    
}
