import React from 'react';
import { Paper, Card, CardHeader, CardContent, Typography, Button, Divider, Chip } from '@mui/material';
import { useEntity } from '../../../contexts';




const Link = ({ icon, url, title }: {icon: string, url: string, title: string }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href={url} target="_blank" rel="noopener">{title}</a>
    </div>
)

const EntityLinks = () => {
    const config = useEntity();

    const links = config?.spec?.links || []

    return (
        <Paper elevation={1} sx={{ borderRadius: '8px' }} style={{ width: '100%', height: '100%' }}>
            <Card >
                <CardHeader title='Links'>

                </CardHeader>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {links.map((link) => (
                            <Link icon={link.icon} title={link.title} url={link.url} />
                        ))}
                    </div>
                </CardContent>
            </Card >
        </Paper>
    );
};

export default EntityLinks;