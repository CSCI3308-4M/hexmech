BOOTSTRAP_THEME=cyborg
JQUERYUI_THEME=vader

.PHONY: all
all: bootstrap.min.css jquery-ui.min.css

.PHONY: bootstrap.min.css
bootstrap.min.css:
	curl -O https://bootswatch.com/$(BOOTSTRAP_THEME)/bootstrap.min.css

.PHONY: jquery-ui.min.css
jquery-ui.min.css:
	cp ../../node_modules/jquery-ui/themes/$(JQUERYUI_THEME)/jquery-ui.css ./
	cp -R ../../node_modules/jquery-ui/themes/$(JQUERYUI_THEME)/images ./

clean:
	rm *.min.css*
