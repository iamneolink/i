package com.examly.springapp.service;

import com.examly.springapp.model.Player;
import com.examly.springapp.repository.PlayerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlayerService {
    @Autowired
    private PlayerRepo playerRepo;

    public List<Player> getAllPlayers() {
        return playerRepo.findAll();
    }

    public Player addPlayer(Player player) {
        return playerRepo.save(player);
    }
}
