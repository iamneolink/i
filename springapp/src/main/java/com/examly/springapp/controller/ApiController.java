package com.examly.springapp.controller;

import com.examly.springapp.model.Player;
import com.examly.springapp.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ApiController {
    @Autowired
    private PlayerService playerService;

    @PostMapping("/addPlayer")
    public Player addPlayer(@RequestBody Player player) {
        return playerService.addPlayer(player);
    }

    @GetMapping("/getAllPlayer")
    public List<Player> getAllPlayer() {
        return playerService.getAllPlayers();
    }
}
