package com.example.casinocry.service.user;

public interface UserService {

    void registerUser(String username, String password, String email);
    
    boolean loginUser(String username, String password);
    
    void updateUserProfile(String username, String newEmail);
    
    void deleteUserAccount(String username);

    
}
