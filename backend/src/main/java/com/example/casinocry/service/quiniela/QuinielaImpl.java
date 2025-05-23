package com.example.casinocry.service.quiniela;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.casinocry.dto.request.ArmarQuinielaRequest;
import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.dto.request.PrediccionDTO;
import com.example.casinocry.entities.Evento;
import com.example.casinocry.entities.Prediccion;
import com.example.casinocry.entities.Quiniela;
import com.example.casinocry.entities.Usuario;
import com.example.casinocry.entities.UsuarioQuiniela;
import com.example.casinocry.entities.ObjectsEmbed.UsuarioQuinielaId;
import com.example.casinocry.entities.prediccion.PrediccionDiferenciaGoles;
import com.example.casinocry.entities.prediccion.PrediccionMarcadorExacto;
import com.example.casinocry.entities.prediccion.PrediccionPrimeroEnMarcar;
import com.example.casinocry.entities.prediccion.PrediccionRangoResultados;
import com.example.casinocry.entities.prediccion.PrediccionResultadoGeneral;
import com.example.casinocry.entities.prediccion.PrediccionTotalGoles;
import com.example.casinocry.repository.EventoRepository;
import com.example.casinocry.repository.QuinielaRepository;
import com.example.casinocry.repository.UserRepository;
import com.example.casinocry.repository.UsuarioQuinielaRespository;
import com.example.casinocry.repository.PrediccionRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuinielaImpl implements QuinielaService {

    @Autowired
    private QuinielaRepository quinielaRepository;

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private UsuarioQuinielaRespository usuarioQuinielaRepository;

    @Autowired
    private PrediccionRepository prediccionRepository;

    @Autowired
    private UserRepository usuarioRepository;

    @Override
    @Transactional
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
        // Obtener la quiniela por ID de la base de datos
        return quinielaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Quiniela no encontrada"));    
    }

    @Override
    public List<Quiniela> getAllQuinielas() {
        // Obtener todas las quinielas de la base de datos
        return quinielaRepository.findAll();
    }

    @Override
    @Transactional
    public void armarQuiniela(ArmarQuinielaRequest request) {
        // Validar que la quiniela exista
        Quiniela quiniela = quinielaRepository.findById(request.getIdQuiniela())
                .orElseThrow(() -> new RuntimeException("Quiniela no encontrada"));

        // Validar que el usuario exista
        Usuario usuario = usuarioRepository.findById(request.getIdUsuario())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Crear una nueva instancia de UsuarioQuiniela
        UsuarioQuinielaId usuarioQuinielaId = new UsuarioQuinielaId(request.getIdUsuario(), request.getIdQuiniela());
        UsuarioQuiniela usuarioQuiniela = new UsuarioQuiniela();
        usuarioQuiniela.setId(usuarioQuinielaId);
        usuarioQuiniela.setQuiniela(quiniela);
        usuarioQuiniela.setUsuario(usuario); // Asignar el usuario

        // Guardar el nuevo UsuarioQuiniela en la base de datos
        usuarioQuiniela = usuarioQuinielaRepository.save(usuarioQuiniela);

        // Lista para almacenar las predicciones
        List<Prediccion> predicciones = new ArrayList<>();

        // Iterar sobre las predicciones proporcionadas en la solicitud
        for (PrediccionDTO prediccionDTO : request.getPredicciones()) {
            // Validar que el evento exista o crearlo si no existe
            Evento evento = eventoRepository.findById(prediccionDTO.getIdGanador()).orElseGet(() -> {
                Evento nuevoEvento = new Evento();
                nuevoEvento.setIdEvento(prediccionDTO.getIdGanador());
                return eventoRepository.save(nuevoEvento); // Guardar el nuevo evento
            });

            // Crear la predicción según el tipo
            Prediccion prediccion;
            switch (prediccionDTO.getStrTipoPrediccion()) {
                case "MARCADOR_EXACTO":
                    PrediccionMarcadorExacto marcador = new PrediccionMarcadorExacto();
                    marcador.setMarcadorLocal(prediccionDTO.getIntResultadoLocal());
                    marcador.setMarcadorVisitante(prediccionDTO.getIntResultadoVisitante());
                    prediccion = marcador;
                    break;

                case "RESULTADO_GENERAL":
                    PrediccionResultadoGeneral resultado = new PrediccionResultadoGeneral();
                    List<String> posiblesResultados = new ArrayList<>();
                    posiblesResultados.add(String.valueOf(prediccionDTO.getIdGanador()));
                    resultado.setPosiblesResultados(posiblesResultados);
                    prediccion = resultado;
                    break;

                case "PRIMERO_EN_MARCAR":
                    PrediccionPrimeroEnMarcar primero = new PrediccionPrimeroEnMarcar();
                    primero.setEquipoOMarcador(prediccionDTO.getIdPrimeroEnMarcar());
                    prediccion = primero;
                    break;

                case "DIFERENCIA_GOLES":
                    PrediccionDiferenciaGoles diff = new PrediccionDiferenciaGoles();
                    diff.setDiferencia(prediccionDTO.getIntResultadoLocal() - prediccionDTO.getIntResultadoVisitante());
                    prediccion = diff;
                    break;

                case "TOTAL_GOLES":
                    PrediccionTotalGoles total = new PrediccionTotalGoles();
                    total.setTotalGoles(prediccionDTO.getIntResultadoLocal() + prediccionDTO.getIntResultadoVisitante());
                    prediccion = total;
                    break;

                case "RANGO_RESULTADOS":
                    PrediccionRangoResultados rango = new PrediccionRangoResultados();
                    rango.setRangoLocal(prediccionDTO.getStrRangoLocal());
                    rango.setRangoVisitante(prediccionDTO.getStrRangoVisitante());
                    prediccion = rango;
                    break;

                default:
                    throw new IllegalArgumentException("Tipo de predicción no válido: " + prediccionDTO.getStrTipoPrediccion());
            }

            // Configurar las propiedades comunes de la predicción
            prediccion.setUsuarioQuiniela(usuarioQuiniela); // Asociar el usuario quiniela
            prediccion.setEvento(evento); // Asociar el evento
            prediccion.setEsDoble(request.isEsDoble()); // Asignar si es doble
            prediccion.setEsTriple(request.isEsTriple()); // Asignar si es triple
            prediccion.setAcertada(null); // Inicialmente no se sabe si es acertada

            // Agregar la predicción a la lista
            predicciones.add(prediccion);
        }

        // Guardar todas las predicciones en la base de datos
        prediccionRepository.saveAll(predicciones);
    }

}
