import React from 'react';
import {
    Grid,
    Paper,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
    Link,
    Divider,
    Chip
} from '@mui/material';
import { useEntity } from '../../../contexts';




const Item = ({ header, body }: { header: string, body: string }) => {
    return (
        <div style={{marginRight: '1rem'}}>
            <Typography variant="h6">{header}</Typography>
            <Typography variant="body1">{body}</Typography>
        </div>
    )
}


const About = () => {
    const entity = useEntity();

    const metadata = entity?.metadata || {};
    const spec = entity?.spec || {};

    return (
        <Paper elevation={1} sx={{ borderRadius: '8px' }} style={{ width: '100%', height: '100%' }}>
            <Card >
                <CardHeader
                    title="About"
                    subheader={
                        <Typography variant="body1" color="textSecondary" component="div">
                            <div>links</div>
                        </Typography>
                    }
                />
                <Divider />
                <CardContent>

                    <Item header='Description' body={metadata?.description} />
                    <br/>
                    <div style={{ display: 'flex' }}>
                        <Item header='Owner' body={spec?.owner} />


                        <Item header='Lifecycle' body={spec?.lifecycle} />

                        <Item header='Type' body={spec?.type} />
                    </div>
                    <br/>
                    <Item header='Tags' body={spec?.tags && spec?.tags.map((tag) => <Chip label={tag} />)} />
                </CardContent>
            </Card>
        </Paper>
    );
};

export default About;