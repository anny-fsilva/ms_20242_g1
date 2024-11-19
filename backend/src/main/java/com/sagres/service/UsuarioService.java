package com.sagres.service;

import com.sagres.model.Usuario;
import com.sagres.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Usuario cadastrarUsuario(Usuario usuario) {
        try {
            // Verifica se o email já existe no banco
            if (usuarioRepository.findByEmailInstitucional(usuario.getEmailInstitucional()) != null) {
                throw new RuntimeException("Email já cadastrado: " + usuario.getEmailInstitucional());
            }
    
            // Codifica a senha
            System.out.println("Senha original: " + usuario.getSenha());
            usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
            System.out.println("Senha codificada: " + usuario.getSenha());
    
            // Tenta salvar o usuário no banco
            System.out.println("Tentando salvar o usuário: " + usuario);
            Usuario savedUsuario = usuarioRepository.save(usuario);
            System.out.println("Usuário salvo com sucesso: " + savedUsuario);
    
            return savedUsuario;
        } catch (Exception e) {
            // Captura e exibe qualquer erro
            e.printStackTrace();
            throw new RuntimeException("Erro ao salvar usuário: " + e.getMessage());
        }
    }

    public Usuario autenticarUsuario(String email, String senha) {
        Usuario usuario = usuarioRepository.findByEmailInstitucional(email);
        if (usuario != null && passwordEncoder.matches(senha, usuario.getSenha())) {
            return usuario;
        }
        throw new RuntimeException("Credenciais inválidas!");
    }
}
