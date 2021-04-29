import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    width:'100%',
    height:'100%',
    '& img':{
      objectFit: 'cover',
    }
  },
}));

export default function  ImageComponent({url,height,width}) {
  const classes = useStyles();

  return (
    <div className={`${classes.imageWrapper} img-wrapper`}><img src={url} style={{ height,width}}/></div>
  );
}

ImageComponent.defaultProps = {
  height:'100%',
  width:'100%'
}