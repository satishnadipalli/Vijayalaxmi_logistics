import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConeIcon as Crane, Truck, Settings, Clock, Wrench, Shield } from "lucide-react"
import Image from "next/image"
import service from "../../public/service1.jpg";
import svlp_logo from "../../public/svlp_logo2.png";



export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/70 z-10" />
        <Image src={service} alt="Industrial services" fill className="object-cover" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-yellow-500 text-slate-900 text-lg px-6 py-2 font-bold">OUR SERVICES</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Comprehensive
            <br />
            <span className="text-yellow-400">Heavy Lifting Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            From crane rentals to transport services and industrial hardware - everything you need for successful heavy
            lifting operations.
          </p>
        </div>
      </section>

      {/* Crane Rentals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-yellow-500 text-slate-900 text-sm px-4 py-2 font-bold">CRANE RENTALS</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Hydraulic, Crawler & Mobile Cranes</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our extensive fleet of modern cranes handles lifting capacities from 25 tons to 500 tons. Whether it's
                precision placement or heavy-duty lifting, we have the right equipment for your project.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Crane className="h-4 w-4 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Hydraulic Cranes</h4>
                    <p className="text-slate-600 text-sm">25T to 200T capacity for precision lifting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Crane className="h-4 w-4 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Crawler Cranes</h4>
                    <p className="text-slate-600 text-sm">100T to 500T for heavy industrial lifts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Crane className="h-4 w-4 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Mobile Cranes</h4>
                    <p className="text-slate-600 text-sm">Quick deployment for urgent requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Crane className="h-4 w-4 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Tower Cranes</h4>
                    <p className="text-slate-600 text-sm">Long-term construction projects</p>
                  </div>
                </div>
              </div>

              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg px-8 py-4">
                Request Crane Quote
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Crane services"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Transport services"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-slate-800 text-white text-sm px-4 py-2 font-bold">TRANSPORT SERVICES</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Multi-axle, Flatbeds & Container Transport
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Specialized transport solutions for oversized and heavy cargo. Our fleet includes multi-axle trailers,
                flatbed trucks, and container carriers for safe, efficient delivery.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Multi-Axle Trailers</h4>
                    <p className="text-slate-600">Specialized for heavy machinery transport up to 200 tons capacity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Flatbed Transport</h4>
                    <p className="text-slate-600">Versatile solution for construction materials and equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Container Carriers</h4>
                    <p className="text-slate-600">Secure transport for containerized industrial goods</p>
                  </div>
                </div>
              </div>

              <Button className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg px-8 py-4">
                Get Transport Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Hardware */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-blue-900 text-white text-sm px-4 py-2 font-bold">HARDWARE PARTS</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Industrial Gears, Pumps & Machinery Parts
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Comprehensive inventory of industrial hardware parts from leading manufacturers. Quality components for
                maintenance, repair, and new installations.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="border-2 border-blue-100">
                  <CardContent className="p-4 text-center">
                    <Settings className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                    <h4 className="font-bold text-slate-800">Gears & Gearboxes</h4>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-100">
                  <CardContent className="p-4 text-center">
                    <Settings className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                    <h4 className="font-bold text-slate-800">Hydraulic Pumps</h4>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-100">
                  <CardContent className="p-4 text-center">
                    <Settings className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                    <h4 className="font-bold text-slate-800">Pipe Fittings</h4>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-100">
                  <CardContent className="p-4 text-center">
                    <Settings className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                    <h4 className="font-bold text-slate-800">Bearings & Seals</h4>
                  </CardContent>
                </Card>
              </div>

              <Button className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg px-8 py-4">
                Browse Parts Catalog
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Hardware parts"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src={svlp_logo}
                alt="Emergency services"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-red-600 text-white text-sm px-4 py-2 font-bold">EMERGENCY LIFTS</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                24x7 Dispatch for Critical Operations
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                When time is critical, our emergency response team is ready. Rapid deployment of cranes and equipment
                for urgent industrial requirements, breakdowns, and disasters.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Rapid Response</h4>
                    <p className="text-slate-600">Equipment deployment within 2-4 hours of emergency call</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Safety First</h4>
                    <p className="text-slate-600">Certified operators and safety protocols for high-risk situations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Crane className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Specialized Equipment</h4>
                    <p className="text-slate-600">Emergency-ready cranes and rescue equipment available 24/7</p>
                  </div>
                </div>
              </div>

              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4">
                Emergency Hotline: +91-XXXX-XXXX
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* On-site Support */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-500 text-slate-900 text-sm px-4 py-2 font-bold">ON-SITE SUPPORT</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trained Manpower & Equipment Servicing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete on-site support with certified operators, maintenance teams, and technical experts to ensure
              smooth operations throughout your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-slate-900" />
                </div>
                <CardTitle className="text-2xl">Certified Operators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Highly trained and certified crane operators with extensive experience in complex lifting operations
                  and safety protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-slate-900" />
                </div>
                <CardTitle className="text-2xl">Equipment Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Preventive maintenance and on-site repairs to minimize downtime and ensure optimal equipment
                  performance throughout your project.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-slate-900" />
                </div>
                <CardTitle className="text-2xl">Safety Supervision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Dedicated safety supervisors and riggers to ensure all operations comply with industry standards and
                  safety regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Discuss Your Project Requirements?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
            Our technical experts are ready to provide customized solutions for your specific heavy lifting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-8 py-4">
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-lg px-8 py-4 bg-transparent"
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
