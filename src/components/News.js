import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Link } from "react-router-dom";

function News({ setIdPlayer, loading, setLoading }) {
  const [isLogin, setIsLogin] = useState(null);
  const [value, setValue] = useState(false);
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetch("https://636e5d64b567eed48adb4ba4.mockapi.io/api/v1/news", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  }, [value]);

  useEffect(() => {
    setLoading(false);
    setIsLogin(JSON.parse(localStorage.getItem("userLogin")));
  }, [loading]);

  const deleteFilm = (id) => {
    fetch(`https://636e5d64b567eed48adb4ba4.mockapi.io/api/v1/news/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setValue(!value);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px 0px",
      }}
    >
      {APIData ? (
        <>
          {APIData.map((news, index) => (
            <Card
              key={index}
              sx={{
                width: "720px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  flexDirection: "row",
                }}
              >
                <div className="item">
                  <div className="avatarImg">
                    <img style={{ width: "260px" }} src={news.img} alt="" />
                  </div>
                  <div>
                    <div className="skills">
                      <span className="info">{news.views} views</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "start",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography variant="h6" component="div" color="primary">
                    {news.title}
                  </Typography>
                  <Typography component="div">{news.descrition}</Typography>
                </div>
              </CardContent>
              <CardActions sx={{ paddingTop: "auto" }}>
                <Link
                  to={`detail/${news.id}`}
                  onClick={() => setIdPlayer(news.id)}
                >
                  <Button variant="outlined">Detail</Button>
                </Link>
                {isLogin && (
                  <>
                    <Link to="/addNews" onClick={() => setIdPlayer(news.id)}>
                      <Button variant="outlined" color="success">
                        <ModeEditIcon />
                      </Button>
                    </Link>
                    <Link to="#" onClick={() => deleteFilm(news.id)}>
                      <Button variant="outlined" color="error">
                        <DeleteOutlineIcon />
                      </Button>
                    </Link>
                  </>
                )}
              </CardActions>
            </Card>
          ))}
        </>
      ) : (
        <Skeleton variant="rectangular" width={700} height={118} />
      )}
    </Container>
  );
}
export default News;
