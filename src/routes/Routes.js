import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/homeview/HomeView'
import { ElectronicsView } from '../views/productsview/electronicsview/ElectronicsView'
import { JeweleryView } from '../views/productsview/jeweleryview/JeweleryView'
import { MensClothingView } from '../views/productsview/mensclothingview/MensClothingView'
import { WomensClothingView } from '../views/productsview/womensclothingview/WomensClothingView'
import { AllProductsView } from '../views/productsview/allproductsview/AllProductsView'
import RoutingPath from './RoutingPath'

export const Routes = ({ children }) => {

    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.womensClothingView} component={WomensClothingView} />
                <Route exact path={RoutingPath.mensClothingView} component={MensClothingView} />
                <Route exact path={RoutingPath.jeweleryView} component={JeweleryView} />
                <Route exact path={RoutingPath.electronicsView} component={ElectronicsView} />
                <Route exact path={RoutingPath.allProductsView} component={AllProductsView} />
                <Route path={RoutingPath.homeView} component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}
