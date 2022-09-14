Login: async (req, res) =>{
    const {email, senha} = req.body;
    const emailpsicologo = await psicologo.findOne({
      where: {email: email},
    })

    if (!emailpsicologo) {
      return res.status(400).json({error: "Email já cadastrado"});
    }

    if (!bcrypt.compareSync(senha, novasenha.senha)){
      return res.status(400).json({error: "Senha incorreta"});
    }

    const user = {
      id: psicologo.id,
      nome: psicologo.nome,
      email: psicologo.email,
    };

    const token = jwt.sign(user, secret.key);

    return res.json({
      token,
      user,
    });
  }