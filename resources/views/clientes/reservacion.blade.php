@extends('clientes')
@section('clientes')
<template v-if="menu==0">
    <example-component></example-component>
</template>

<template v-if="menu==1">
    <h1>menu1</h1>
</template>

<template v-if="menu==2">
<h1>menu2</h1>
</template>

<template v-if="menu==3">
<h1>menu3</h1>
</template>
@endsection