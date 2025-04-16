package com.example.casinocry.service.file;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.Path;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

public class FileImpl implements FileService {

    private static final String UPLOAD_DIR = "uploads/";
    private static final String DIR_DEFAULT = "uploads/banners/img_default.png";

    @Override
    public String uploadFile(MultipartFile file, String pathName) {
        // Verificar si el archivo está vacío
        try {
            if (file.isEmpty()) {
                return DIR_DEFAULT;
            }

            // Crear la carpeta de destino si no existe
            File uploadDir = new File(UPLOAD_DIR + pathName + "/");
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // Generar un nombre único para el archivo
            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();

            // Guardar el archivo en el servidor
            Path path = Paths.get(UPLOAD_DIR + fileName);

            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
            
            return path.toString();
        } catch (IOException e) {
            throw new RuntimeException("Error al guardar el archivo", e);
        }
    }

    @Override
    public String downloadFile(String filePath, String fileName) {
        // Implement the logic to download a file
        return "File downloaded successfully";
    }

    @Override
    public String deleteFile(String filePath, String fileName) {
        // Implement the logic to delete a file
        return "File deleted successfully";
    }

    @Override
    public String listFiles(String directoryPath) {
        // Implement the logic to list files in a directory
        return "List of files in the directory";
    }

    @Override
    public String getFileInfo(String filePath, String fileName) {
        // Implement the logic to get information about a file
        return "File information retrieved successfully";
    }

}
