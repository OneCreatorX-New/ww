import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = process.env.PORT || 3000

// Función para obtener contenido de GitHub
async function getGithubContent(path) {
  const response = await fetch(`https://raw.githubusercontent.com/bjalalsjzbslalqoqueeyhskaambpqo/kajsbsba--hahsjsv-kakwbs_jaks_082hgg927hsksoLol-Noobbro9877272jshshsbsjsURLwww.noob.com.Obfuscate/refs/heads/main/${path}`)
  if (!response.ok) {
    throw new Error('No se pudo obtener el contenido de GitHub')
  }
  return response.text()
}

// Ruta para manejar solicitudes de código
app.get('/Generate%20Code%20Image', async (req, res) => {
  try {
    const content = await getGithubContent('18973713348.lua')
    res.type('text/plain').send(content)
  } catch (error) {
    res.status(500).send('Error al obtener el contenido')
  }
})

// Ruta para manejar solicitudes numéricas
app.get('/:id', async (req, res) => {
  try {
    const content = await getGithubContent(`${req.params.id}.lua`)
    res.type('text/plain').send(content)
  } catch (error) {
    res.status(500).send('Error al obtener el contenido')
  }
})

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`)
})
