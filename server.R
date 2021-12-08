library(shiny)

# add resources from dist direction which contains vue-cli build files
shiny::addResourcePath("assets",file.path(here::here(),"dist","assets"))

function(input, output, session) {
  
}