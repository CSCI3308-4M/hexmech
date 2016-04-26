var resource = {};

/**
* Resource function to assign grass a color and get its image from the spritesheet
* @return {grass} returns grass as the name of the tiles resource
**/
resource.grass = function ()
{
    this._colour = "lightgreen";
    this.getSprite = function ()
    {
        return "grass";
    }
}

/**
* Resource function to assign swamp a color and get its image from the spritesheet
* @return {swamp} returns water as the name of the tiles resource
**/
resource.swamp = function ()
{
    this._colour = "lightgreen";
    this.getSprite = function ()
    {
        return "swamp";
    }
}

/**
* Resource function to assign water a color and get its image from the spritesheet
* @return {water} returns water as the name of the tiles resource
**/
resource.water = function()
{
    this._colour = "lightblue";
    this.getSprite = function ()
    {
        return "water";
    }
}

/**
* Resource function to assign forest a color and get its image from the spritesheet
* @return {forest} returns forest as the name of the tiles resource
**/
resource.forest = function ()
{
    this._colour = "green";
    this.getSprite = function ()
    {
        return "forest";
    }
}

/**
* Resource function to assign mountain a color and get its image from the spritesheet
* @return {mountain} returns mountain as the name of the tiles resource
**/
resource.mountain = function ()
{
    this._colour = "#817e6d";
    this.getSprite = function ()
    {
        return "mountain";
    }
}

