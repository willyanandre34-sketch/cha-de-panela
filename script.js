body {
  font-family: Arial, sans-serif;
  background: #fff9c4;
  margin: 0;
}

nav {
  background: #fdd835;
  padding: 10px;
  text-align: center;
}

nav button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.aba {
  display: none;
  padding: 20px;
  text-align: center;
}

.aba.ativa {
  display: block;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
}

.card img {
  width: 100%;
  border-radius: 6px;
}

.card button {
  margin-top: 10px;
}
