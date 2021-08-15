import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Drawing from "./components/Drawing";
import Form from "./components/Form";

function App() {
  return (
    <Container>
      <h1 align="center" style={{ marginBottom: "5rem" }}>
        2-D Water flow
      </h1>
      <Grid container>
        <Grid item xs={8}>
          <Drawing />
        </Grid>
        <Grid item xs={4}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
