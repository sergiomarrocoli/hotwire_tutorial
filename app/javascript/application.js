import "@hotwired/turbo-rails"
import "./controllers"
import consumer from './channels/consumer'
import CableReady from "cable_ready"
import mrujs from "mrujs";
import { CableCar } from "mrujs/plugins"

mrujs.start({
  plugins: [
    new CableCar(CableReady)
  ]
})

import "trix"
import "@rails/actiontext"

import * as ActiveStorage from "@rails/activestorage"

ActiveStorage.start()