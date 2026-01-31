# Adding in other components!

The hackpad kit comes with more than just a few keyswitches! It comes with RGB LEDs, Rotary encoders, and a fancy 128x32 OLED screen!

The Orpheuspad example I designed has examples of every single one - I would also recommend looking at other repositories for inspo!

As with anything, make sure to ask in #hackpad if you ever have any questions!

## 4+ keys / Matrix wiring

If you're using 4+ keys, you should use [matrix wiring!](https://docs.qmk.fm/how_a_matrix_works) There's an entire section on that in the [resources](/resources) section.

The tl;dr is that instead of wiring each switch to a unique pin, you can set them up in a 2D grid and pinpoint the specific switch being pressed based on which 2 pins activated!

You'll need diodes to do this. The specific diode that comes with the kit is a 1N4148 diode from onsemi. Datasheet [here](https://www.onsemi.com/download/data-sheet/pdf/1n914-d.pdf)

For the footprint, I would recommend using `Diode_THT:D_DO-35_SOD27_P7.62mm_Horizontal`. You can use longer ones if you'd like for the aesthetic, but I find this one tends to work the best when assembling - do not use anything shorter, you'll have a pretty hard time if you do.

## Rotary encoders

Rotary encoders are knobs like [these](https://www.adafruit.com/product/377) - they turn both ways, and have a button you can press!

The specific one we're using is the EC11E with a D-shaft that's 15mm long. You can find an exact CAD model in the [GitHub repository!](https://github.com/hackclub/hackpad/tree/clean/extras)

I would recommend using the symbol `(symbol name)` and the footprint `(asdf)` which you can find in the [resources](/resources) section!

You _may_ see some implementations include pull-up resistors. This is not necessary for us since our microcontroller (the rp2040) has built-in pull up resistors!

Firmware implementation info can be found here:

[QMK](https://docs.qmk.fm/features/encoders) [KMK](https://github.com/KMKfw/kmk_firmware/blob/main/docs/en/encoder.md) [ZMK](https://zmk.dev/docs/development/hardware-integration/encoders)

## SK6812MINI-E RGB LEDs

These are the RGB LEDs that come with the hackpad kit! Each one has a super tiny microcontroller inside, so you can control all of them with only 1 pin of your micrcontroller!

Each o

They have 4 pins

The main things to watch out for

**IMPORTANT**: Make sure your pinout matches the following screenshot _exactly_

![screenshot of SK6812MINI E]()

Notice the small notch/cut on the bottom right corner - your LEDs _will_ not work if it's in a different orientation!

## OLED Display

OLED Displays are small screens that can display various pieces of info! Here's a cat that I have on mind

For footprint, you can actually just use a 4 pin header! This is because

The most important thing to note is to make sure that you make sure the pin order is correct. Some pictures you'll see online will feature the 4 pins in different orientations

(side by side of pictures)

Additionally, pull-up resistors are _not_ necessary! The microcontroller we're using is based on the [Raspberry Pi RP2040](https://www.raspberrypi.com/products/rp2040/), which has built-in pullup resistors on every pin - this means you don't need to manually add resistors.
