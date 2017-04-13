<template lang="html">
    <div class="loader">
        <div data-loader='rectangle'></div>
    </div>

</template>

<script>
export default {
    name:"loader"
}
</script>

<style lang="css">
.loader{
    height: 70px;
    padding: 20px;
}
[data-loader='rectangle']
{
    position: relative;
    margin:0 auto;
    width: 8px;
    height: 20px;

    -webkit-animation: rectangle infinite 1s ease-in-out -.2s;
       -moz-animation: rectangle infinite 1s ease-in-out -.2s;
         -o-animation: rectangle infinite 1s ease-in-out -.2s;
            animation: rectangle infinite 1s ease-in-out -.2s;

    background-color: #2196f3;
}
[data-loader='rectangle']:before,
[data-loader='rectangle']:after
{
    position: absolute;

    width: 8px;
    height: 20px;

    content: '';

    background-color: #2196f3;
}
[data-loader='rectangle']:before
{
    left: -15px;

    -webkit-animation: rectangle infinite 1s ease-in-out -.4s;
       -moz-animation: rectangle infinite 1s ease-in-out -.4s;
         -o-animation: rectangle infinite 1s ease-in-out -.4s;
            animation: rectangle infinite 1s ease-in-out -.4s;
}
[data-loader='rectangle']:after
{
    right: -15px;

    -webkit-animation: rectangle infinite 1s ease-in-out;
       -moz-animation: rectangle infinite 1s ease-in-out;
         -o-animation: rectangle infinite 1s ease-in-out;
            animation: rectangle infinite 1s ease-in-out;
}
@-webkit-keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 25px;

        -webkit-box-shadow: 0 0 #2196f3;
                box-shadow: 0 0 #2196f3;
    }
    40%
    {
        height: 35px;

        -webkit-box-shadow: 0 -20px #2196f3;
                box-shadow: 0 -20px #2196f3;
    }
}
@-moz-keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 25px;

        -webkit-box-shadow: 0 0 #2196f3;
                box-shadow: 0 0 #2196f3;
    }
    40%
    {
        height: 35px;

        -webkit-box-shadow: 0 -20px #2196f3;
                box-shadow: 0 -20px #2196f3;
    }
}
@-o-keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 25px;

        -webkit-box-shadow: 0 0 #2196f3;
                box-shadow: 0 0 #2196f3;
    }
    40%
    {
        height: 35px;

        -webkit-box-shadow: 0 -20px #2196f3;
                box-shadow: 0 -20px #2196f3;
    }
}
@keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 25px;

        -webkit-box-shadow: 0 0 #2196f3;
                box-shadow: 0 0 #2196f3;
    }
    40%
    {
        height: 35px;

        -webkit-box-shadow: 0 -20px #2196f3;
                box-shadow: 0 -20px #2196f3;
    }
}

</style>
