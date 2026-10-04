import { Routes } from '@angular/router';
import { Dashborad } from './dashborad/dashborad';
import { DataTypes } from './basic/data-types/data-types';
import { Databinding } from './basic/databinding/databinding';
import { Admin } from './admin/admin';
import { SignalBasedForm } from './forms/signal-based-form/signal-based-form';
import { ReactiveForm } from './forms/reactive-form/reactive-form';
import { TemplateForm } from './forms/template-form/template-form';
import { PipesEX } from './basic/pipes-ex/pipes-ex';
import { GetApi } from './get-api/get-api';

export const routes: Routes = [
    {
        path:"dashboard",
        component: Dashborad
    },
    {
        path:"datatype",
        component:DataTypes
    },
    {
        path:"databinding",
        component:Databinding
    },
    {
        path:'admin',
        component:Admin
    },
    {
        path:'templateForm',
        component:TemplateForm
    },
    {
        path:'reactiveForm',
        component:ReactiveForm
    },
    {
        path:'signalForm',
        component:SignalBasedForm
    },
    {
        path:'pipesEx',
        component:PipesEX
    },
    {
        path:'getApi',
        component:GetApi
    }
];
