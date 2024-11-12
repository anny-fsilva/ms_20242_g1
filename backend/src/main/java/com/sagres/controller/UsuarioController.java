package com.sagres.controller;

import com.sagres.model.Usuario;
import com.sagres.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastro")
    public String cadastrarUsuario(@RequestBody Usuario usuario) {
        try {
            usuarioService.cadastrarUsuario(usuario);
            return "Cadastro realizado com sucesso!";
        } catch (RuntimeException e) {
            return e.getMessage();
        }
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String senha) {
        try {
            Usuario usuario = usuarioService.autenticarUsuario(email, senha);
            return "Login bem-sucedido para: " + usuario.getNome();
        } catch (RuntimeException e) {
            return "Erro: " + e.getMessage();
        }
    }
}
