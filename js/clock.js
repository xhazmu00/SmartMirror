$.widget( "mirror.clock", {
    _create: function() {
        this.element.addClass( "clock" );
        this.refresh();
    },
    refresh: function() {
        
        $("<div>").html("DIY Widget").appendTo(this.element);

    },
    _destroy: function() {
        this.element
            .removeClass( "clock" )
            .text( "" );
    }
});