package com.example.casinocry.service.file;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {

    String uploadFile(MultipartFile file , String pathName);

    String downloadFile(String filePath, String fileName);

    String deleteFile(String filePath, String fileName);

    String listFiles(String directoryPath);

    String getFileInfo(String filePath, String fileName);

}
