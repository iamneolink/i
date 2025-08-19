package com.examly.springapp;
import java.io.File;
import org.springframework.http.MediaType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc

class SpringappApplicationTests {

 
    @Autowired
    private  MockMvc mockMvc ;
    @Test

    void testaddPlayer() throws Exception{   
      
        String st = "{\"playerName\": \"demoname\",\"playerCity\": \"democity\",\"phone\": 9876543211 ,\"playedIn\": \"Democricket\" , \"playerType\": \"Demobatsman\" , \"lastPlayedFor\": \"Demoteam\"}";
         mockMvc.perform(MockMvcRequestBuilders.post("/addPlayer")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(st)
                    .accept(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers.status().isOk())
                    .andReturn();

    }

    @Test
    void testgetAllPlayer() throws Exception{
         mockMvc.perform(get("/getAllPlayer")
                        .accept(MediaType.APPLICATION_JSON))
                        .andDo(print())
                        .andExpect(status().isOk())
                        .andExpect(jsonPath("$").isArray())
                        .andReturn();

    }


    @Test 
    public void test_Controller_Directory_Exists() { 
        String directoryPath = "src/main/java/com/examly/springapp/controller"; // Replace with the path to your directory 
        File directory = new File(directoryPath); 
        assertTrue(directory.exists() && directory.isDirectory()); 
    }
    
    @Test 
    public void test_ApiController_File_Exists() { 
        String filePath = "src/main/java/com/examly/springapp/controller/ApiController.java"; // Replace with the path to your file 
        File file = new File(filePath); 
        assertTrue(file.exists() && file.isFile()); 
    }

    @Test 
    public void test_model_Directory_Exists() { 
        String directoryPath = "src/main/java/com/examly/springapp/model"; // Replace with the path to your directory 
        File directory = new File(directoryPath); 
        assertTrue(directory.exists() && directory.isDirectory()); 
    }
    
    @Test 
    public void test_Player_File_Exists() { 
        String filePath = "src/main/java/com/examly/springapp/model/Player.java"; // Replace with the path to your file 
        File file = new File(filePath); 
        assertTrue(file.exists() && file.isFile()); 
    }

    @Test 
    public void test_Repository_Folder_Exists() { 
        String directoryPath = "src/main/java/com/examly/springapp/repository"; // Replace with the path to your directory 
        File directory = new File(directoryPath); 
        assertTrue(directory.exists() && directory.isDirectory()); 
    }
    
    @Test 
   
    public void test_Service_Folder_Exists() { 
        String directoryPath = "src/main/java/com/examly/springapp/service"; // Replace with the path to your directory 
        File directory = new File(directoryPath); 
        assertTrue(directory.exists() && directory.isDirectory()); 
    }

    @Test 
   
    public void test_configuration_Folder_Exists() { 
        String directoryPath = "src/main/java/com/examly/springapp/configuration"; // Replace with the path to your directory 
        File directory = new File(directoryPath); 
        assertTrue(directory.exists() && directory.isDirectory()); 
    }

    @Test
    public void test_ApiController_Class_Exists() {
        checkClassExists("com.examly.springapp.controller.ApiController");
    }

    @Test
    public void test_PlayerRepo_Class_Exists() {
        checkClassExists("com.examly.springapp.repository.PlayerRepo");
    }

    @Test
    public void test_PlayerService_Class_Exists() {
        checkClassExists("com.examly.springapp.service.PlayerService");
    }

    @Test
    public void test_PlayerModel_Class_Exists() {
        checkClassExists("com.examly.springapp.model.Player");
    }

    
    @Test
    public void test_Player_Model_Has_playerId_Field() {
        checkFieldExists("com.examly.springapp.model.Player", "playerId");
    }

    @Test
    public void test_Player_Model_Has_playerName_Field() {
        checkFieldExists("com.examly.springapp.model.Player", "playerName");
    }

    @Test
    public void test_Player_Model_Has_playerCity_Field() {
        checkFieldExists("com.examly.springapp.model.Player", "playerCity");
    }

    @Test
    public void test_Player_Model_Has_phone_Field() {
        checkFieldExists("com.examly.springapp.model.Player", "phone");
    }


    @Test
    public void test_Player_Model_Has_playedIn_Field() {
        checkFieldExists("com.examly.springapp.model.Player", "playedIn");
    }

    @Test
    public void test_Player_Model_Has_playerType_Field() {
        checkFieldExists("com.examly.springapp.model.Player", "playerType");
    }

     @Test
    public void test_Player_Model_Has_lastPlayedFor_Field() {
        checkFieldExists("com.examly.springapp.model.Player", "lastPlayedFor");
    }


    @Test
    public void test_PlayerRepo_Extends_JpaRepository() {
        checkClassImplementsInterface("com.examly.springapp.repository.PlayerRepo", "org.springframework.data.jpa.repository.JpaRepository");
    }

    @Test
    public void test_CorsConfiguration_Class_Exists() {
        checkClassExists("com.examly.springapp.configuration.CorsConfiguration");
    }

    @Test
    public void test_CorsConfiguration_Has_Configuration_Annotation() {
        checkClassHasAnnotation("com.examly.springapp.configuration.CorsConfiguration", "org.springframework.context.annotation.Configuration");
    }


     private void checkClassExists(String className) {
        try {
            Class.forName(className);
        } catch (ClassNotFoundException e) {
            fail("Class " + className + " does not exist.");
        }
    }

    private void checkFieldExists(String className, String fieldName) {
        try {
            Class<?> clazz = Class.forName(className);
            clazz.getDeclaredField(fieldName);
        } catch (ClassNotFoundException | NoSuchFieldException e) {
            fail("Field " + fieldName + " in class " + className + " does not exist.");
        }
    }

    private void checkClassImplementsInterface(String className, String interfaceName) {
        try {
            Class<?> clazz = Class.forName(className);
            Class<?> interfaceClazz = Class.forName(interfaceName);
            assertTrue(interfaceClazz.isAssignableFrom(clazz));
        } catch (ClassNotFoundException e) {
            fail("Class " + className + " or interface " + interfaceName + " does not exist.");
        }
    }

       
    private void checkClassHasAnnotation(String className, String annotationName) {
        try {
            Class<?> clazz = Class.forName(className);
            Class<?> annotationClazz = Class.forName(annotationName);
            assertTrue(clazz.isAnnotationPresent((Class<? extends java.lang.annotation.Annotation>) annotationClazz));
        } catch (ClassNotFoundException e) {
            fail("Class " + className + " or annotation " + annotationName + " does not exist.");
        }
    }




}

 