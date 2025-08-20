package com.examly.springapp.model;

import javax.persistence.*;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playerId;
    private String playerName;
    private String playerCity;
    private String phone;
    private String playedIn;
    private String playerType;
    private String lastPlayedFor;

    public Player() {}

    public Player(Long playerId, String playerName, String playerCity, String phone, String playedIn, String playerType, String lastPlayedFor) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.playerCity = playerCity;
        this.phone = phone;
        this.playedIn = playedIn;
        this.playerType = playerType;
        this.lastPlayedFor = lastPlayedFor;
    }

    public Long getPlayerId() { return playerId; }
    public void setPlayerId(Long playerId) { this.playerId = playerId; }
    public String getPlayerName() { return playerName; }
    public void setPlayerName(String playerName) { this.playerName = playerName; }
    public String getPlayerCity() { return playerCity; }
    public void setPlayerCity(String playerCity) { this.playerCity = playerCity; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getPlayedIn() { return playedIn; }
    public void setPlayedIn(String playedIn) { this.playedIn = playedIn; }
    public String getPlayerType() { return playerType; }
    public void setPlayerType(String playerType) { this.playerType = playerType; }
    public String getLastPlayedFor() { return lastPlayedFor; }
    public void setLastPlayedFor(String lastPlayedFor) { this.lastPlayedFor = lastPlayedFor; }
}
