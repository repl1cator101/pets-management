package com.example.petsmanagement.api;


import com.example.petsmanagement.config.JwtUtil;
import com.example.petsmanagement.model.JwtRequest;
import com.example.petsmanagement.model.JwtResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;

    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getName(), request.getPassword()));
        final UserDetails user = userDetailsService.loadUserByUsername(request.getName());
        if (user != null) {
            return ResponseEntity.ok().body(new JwtResponse(jwtUtil.generateToken(user)));
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "invalid");
    }

}
