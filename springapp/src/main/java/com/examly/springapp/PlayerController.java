package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class PlayerController {
    // Placeholder data for players
    private final List<Map<String, String>> players = new ArrayList<>(
            Arrays.asList(
                    new HashMap<String, String>() {
                        {
                            put("name", "Rahul Sharma");
                            put("city", "Mumbai");
                            put("phone", "9876543210");
                            put("playedIn", "School");
                            put("type", "Batsman");
                            put("lastTeam", "Mumbai Juniors");
                        }
                    },
                    new HashMap<String, String>() {
                        {
                            put("name", "Amit Verma");
                            put("city", "Delhi");
                            put("phone", "9123456789");
                            put("playedIn", "Club");
                            put("type", "Bowler");
                            put("lastTeam", "Delhi Strikers");
                        }
                    }));

    @PostMapping("/addPlayer")
    public ResponseEntity<String> addPlayer(@RequestBody Map<String, String> player) {
        // Basic validation (simulate backend validation)
        if (!player.containsKey("name") || player.get("name").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Name is required");
        if (!player.containsKey("city") || player.get("city").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("City is required");
        if (!player.containsKey("phone") || !player.get("phone").matches("\\d{10}"))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Valid 10-digit phone required");
        if (!player.containsKey("playedIn") || player.get("playedIn").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Played-in is required");
        if (!player.containsKey("type") || player.get("type").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Type is required");
        // Add to placeholder list
        players.add(new HashMap<>(player));
        return ResponseEntity.ok("Player added successfully");
    }

    @GetMapping("/getAllPlayer")
    public List<Map<String, String>> getAllPlayer() {
        return players;
    }
}
package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class PlayerController {
    // Placeholder data for players
    private final List<Map<String, String>> players = new ArrayList<>(
            Arrays.asList(
                    new HashMap<String, String>() {
                        {
                            put("name", "Rahul Sharma");
                            put("city", "Mumbai");
                            put("phone", "9876543210");
                            put("playedIn", "School");
                            put("type", "Batsman");
                            put("lastTeam", "Mumbai Juniors");
                        }
                    },
                    new HashMap<String, String>() {
                        {
                            put("name", "Amit Verma");
                            put("city", "Delhi");
                            put("phone", "9123456789");
                            put("playedIn", "Club");
                            put("type", "Bowler");
                            put("lastTeam", "Delhi Strikers");
                        }
                    }));

    @PostMapping("/addPlayer")
    public ResponseEntity<String> addPlayer(@RequestBody Map<String, String> player) {
        // Basic validation (simulate backend validation)
        if (!player.containsKey("name") || player.get("name").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Name is required");
        if (!player.containsKey("city") || player.get("city").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("City is required");
        if (!player.containsKey("phone") || !player.get("phone").matches("\\d{10}"))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Valid 10-digit phone required");
        if (!player.containsKey("playedIn") || player.get("playedIn").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Played-in is required");
        if (!player.containsKey("type") || player.get("type").trim().isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Type is required");
        // Add to placeholder list
        players.add(new HashMap<>(player));
        return ResponseEntity.ok("Player added successfully");
    }

    @GetMapping("/getAllPlayer")
    public List<Map<String, String>> getAllPlayer() {
        return players;
    }
}
