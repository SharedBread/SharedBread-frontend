import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import DeleteIcon from '@material-ui/icons/Delete';
//import DeleteForeverIcon, {Grid, DeleteIcon} from '@material-ui/icons/DeleteForever';


//this page looks at shopping list for each user 
function ItemtoDonate() {


    const [items, setItems] = useState(["orange", "apples", "candy"]);



    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       color: theme.palette.text.primary,
    //     },
    //   }));

    // //   export default function SvgMaterialIcons() {
    // //     const classes = useStyles();

    //     return (
    //       <Grid container className={classes.root}>
    //         <Grid item xs={4}>
    //           <Typography>Filled</Typography>
    //         </Grid>
    //        



    return (
        <div>
            <div>
                <h1>Item to Donate</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div> <input className="col-12 col-md-4" className="form-control" type="text" placeholder="Donate Items" aria-label="Search" /></div>
                    <div> <Button className="col-3 col-md-1" className="btn btn-success" variant="success" type="submit">+</Button></div>
                    {items.map(item => {
                        return (
                            <Card>
                                <Card.Body>
                                    {/* <Grid item xs={8}>
                                        <DeleteIcon />
                                        <DeleteForeverIcon /> */}
                                        <Card.Title>{item}</Card.Title>
                                        {/* </Grid>*/}
                                </Card.Body> 
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ItemtoDonate

