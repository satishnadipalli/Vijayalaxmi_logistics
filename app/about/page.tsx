import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Target, Zap } from "lucide-react"
import Image from "next/image"
import about from "../../public/about1.jpg"
import founder1 from "../../public/director1.jpg"
import founder2 from "../../public/director2.jpg"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70 z-10" />
        <Image src={about} alt="Industrial facility" fill className="object-cover" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-yellow-500 text-slate-900 text-lg px-6 py-2 font-bold">ABOUT US</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Over 20 Years of
            <br />
            <span className="text-yellow-400">Heavy Lifting Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            From humble beginnings to becoming India's most trusted name in crane rentals, transport services, and
             Rental services distribution.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-slate-800 text-white text-sm px-4 py-2 font-bold">OUR STORY</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                Building India's Infrastructure, One Lift at a Time
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Founded in 2000, Vijaya Laxmi Logistics Pvt. Ltd. began as a small crane rental service with a vision
                  to support India's growing industrial sector. What started with a single hydraulic crane has evolved
                  into a comprehensive logistics powerhouse.
                </p>
                <p>
                  Today, we operate one of India's largest fleets of specialized heavy lifting equipment, transport
                  vehicles, and maintain extensive inventory of  Rental services parts. Our journey reflects India's
                  own industrial transformation.
                </p>
                <p>
                  From metro construction projects to power plant installations, from petrochemical complexes to
                  manufacturing facilities, we've been the backbone supporting India's infrastructure development across
                  all major industrial hubs.
                </p>
              </div>
              <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg px-8 py-4">
                View Our Projects
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Company founding"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-slate-900 p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">2000</div>
                <div className="font-semibold">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-20  bg-slate-100">
        <div className="container items-center mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-900 text-white text-sm px-4 py-2 font-bold">LEADERSHIP</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Visionary Leadership Driving Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our leadership team combines decades of industry experience with innovative thinking to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="flex items-center gap-10 mb-16">
            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <Image
                  src={founder1}
                  alt="Founder"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Santhosh Kumar</h3>
                <p className="text-yellow-600 font-semibold mb-4">Founder & Director</p>
                <p className="text-slate-600">
                  Visionary leader with 25+ years in heavy machinery and logistics. Pioneered modern crane rental
                  practices in India.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <Image
                  src={founder2}
                  alt="Operations Director"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Hymavathi</h3>
                <p className="text-yellow-600 font-semibold mb-4">Operations & Managing Director</p>
                <p className="text-slate-600">
                  Expert in fleet management and safety protocols. Ensures operational excellence across all service
                  lines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-500 text-slate-900 text-sm px-4 py-2 font-bold">OUR VALUES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Values That Drive Our Success</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core values shape every decision we make and every service we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                Committed to delivering superior quality in every project, exceeding client expectations consistently.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-300">
                Building trust through transparent practices, honest communication, and ethical business conduct.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-300">
                Dependable service delivery with on-time performance and consistent quality across all operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                Embracing new technologies and methods to improve efficiency and safety in heavy lifting operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-slate-800 text-white text-sm px-4 py-2 font-bold">TESTIMONIALS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by India's leading industrial companies for critical heavy lifting operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-500 mb-4">{"★".repeat(5)}</div>
                  <p className="text-slate-700 text-lg italic">
                    "Vijaya Laxmi Logistics handled our power plant installation with exceptional precision. Their
                    500-ton crane and expert team made a complex operation look effortless."
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-slate-800">Suresh Reddy</div>
                    <div className="text-slate-600">Project Manager, NTPC</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-500 mb-4">{"★".repeat(5)}</div>
                  <p className="text-slate-700 text-lg italic">
                    "24/7 availability and rapid response time saved our production schedule. Their emergency crane
                    service is unmatched in the industry."
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-slate-800">Meera Joshi</div>
                    <div className="text-slate-600">Operations Head, Tata Steel</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-500 mb-4">{"★".repeat(5)}</div>
                  <p className="text-slate-700 text-lg italic">
                    "From metro construction to bridge installations, they've been our reliable partner for over 10
                    years. Professional, safe, and always on time."
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-slate-800">Vikram Singh</div>
                    <div className="text-slate-600">Site Engineer, L&T Construction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
