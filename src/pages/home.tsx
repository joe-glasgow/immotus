import {FC} from 'react';
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/atoms/Button";
import { StyledList } from "@/components/organisms/page/Index.styles";
import { Container } from "@/components/organisms/Page.styles";
import {Card, CardContent} from "@mui/material";

const HomePage: FC = () => {
    const navigate = useNavigate();
    return <>
        <Typography paragraph variant="subtitle"><i>Immotus</i> - unmoved, <b>static</b>, motionless, immovable, unchanged, still</Typography>
        <Container>
            <Typography paragraph variant="h2">A Static Site Generator for Vite, using:</Typography>
            <Card style={{ margin: '16px 0'}} elevation={3}>
                <CardContent>
                    <StyledList>
                        <li>React</li>
                        <li>React Router</li>
                        <li>TypeScript,</li>
                        <li>Material UI</li>
                        <li>Styled Components </li>
                        <li>Storybook</li>
                    </StyledList>
                </CardContent>
            </Card>
        </Container>
        <Button variant="outline" onClick={() => navigate("/about")}>Usage</Button>
    </>
};

export default HomePage;