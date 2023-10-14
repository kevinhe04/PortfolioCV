import React from "react";
import Navigation from "../Components/navbar";
import Footer from "../Components/footer";
import Buttonf from "../Components/button";

const Projects = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to to-black">
            <Navigation />
                <div className="">
                <h1 className="text-center mt-10 text-6xl text-indigo-400 underline decoration-white"> Projects </h1>
                <div class="row row-cols-1 row-cols-md-3 g-4 p-20">
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHeCiakaBhyIO6gNdhEbcBH0xiS0ebC63Ii4IZR5ruC4ARwrxBk1zlnxQhWmLuBSTrTNYzNqm7hUq9BexZy4NDUSPLjaUvMdm0ShEzsZugTSw5TXuoMxyO4WDnuZCW7ZskJizupXdqMEp_EmS58FCd6GH_ca6clysPBfMgXNUxGFTM3ewtBhmNqeSzKVMzB4qTZQoA7iasb4iF9ALuh_H6csOtBoIYiEMSZBPLXRP0IihNEeO1a3xti3dtOI5mLIVUP0uNdBn0MNYvUNMIF12LH8in2EiXV59iXPSP3iPx6hLs4ImhS_-AQClMfR0Sq_hGidRiK7xD9srx-6Jg1HFXPBlrD5ny6hahiMNl8hZMkVLTYtOX2HNpPU4S7vvFkhEUNlubcXg9CC0dB3iLdPfBn5VAUwK_lttW-hFKVm-uL78bOTxnBlqQTLMxfuIv1rdtk8ahW5pSxuua8mQeZSs2twdoVbuQyewd19yJQLhbcUmI_DVJJ3Q7kD-EyBA8s2uQEYzFdfnGgS45qgqhaw6y1ZzWxhgXhwbiCnB1OWAgdY5orjDLKB8uHYgEO1225-M2UtIibp5NWakMQNbJ0EG4D8tO-e_R2xnshY_MKuL_fpPKBhd4FiLQ0JAIaWt3Hv8--HI3fkxLc5Ew8sn06JVlubCRl8yuZu1_lSBqJ1OL9bEyUmfyC1ELauyoRYdys_xusrYoDERIShkhstXEHrG6rQ2-nN7h4wz2AUDVGPXMOswrGXLukiFWwkTSNSTyF9r4Cj3DTODRmktto0uRABfG7lMTBCU5T-fOUc4RVloJ6EVQHNyYDeOabKTSppMoxNXyyMH9PqIIUeVj52NfOLUzJ7UNs00CFNrOol3RZDZClPvJXCMpLMkpwphdhnUoG1BD6mUIKUlnxzkUX5zpO6iO1EmtQ=w1890-h963-s-no?authuser=0" class="card-img-top" alt="Volleyball"/>
                        <div class="card-body">
                            <h5 class="card-title"> Build Your Own Ukulele</h5>
                            <p class="card-text">
                            HTML website as part of the Arts and Sciences Integrating Activity Project.
                            Website documenting the process of making a cardboard ukulele from scratch and how to play the ukulele with the help of self-made music lessons.
                            </p>
                            <Buttonf buttonText="CHECK WEBSITE" onClick={() => window.open('https://kevinhe04.github.io/Arts-and-Science-IA-Project', '_blank')} />
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHci9P4TTJrkhXGfb3kfxoczFxVldsOAHD6jjPc3aLrIHPlZK2xtjJ6gARqjUMXzG_e03hbleG9fpJ8vW_Vl9Zrlp2O9g-c7qKSNbxHUQV4W1iU1WejGmQCft_aJcphnFPIy-RkOvyarOm461HPsl3Av6yxegvENoruCLKrZkBVKM_6-zT-QnxHq7hN91F9U7D-XFeu1HgLkVeWEdo-f9Ad2xAk6cawXVDvf4gGbM2IwMIi4nF_rO6B8P5XX4pnN2e-a2z411E4A1dHIIw3AfXRmk0WvpzWu7DeTfhHNYm0ps5hb4rwLxcu3Hl1OnpYSSSl_3Sp6oMXqdV1ND_UApJ_NPXyF0EGE82PE1XJ-AzhDJTIVKUyW9OpqRKDcRKYnkDRHR5Ozpex_FVMEr8o_-UgU12vKqwhmdCsrk22rwSIykZxMKT9ewSIpasnbOsYg64t2YezunhCMymrSsYA1Cyi3dRaRrJM6eh2r-K7IWjYGOYpiQPEtITWpnfPUF7P6iHG0Jgr8jLCDVwhSitJmTVDZePfkRWI_7kl5lvit0a8PyAm1Fp4ViVRdnUTfoIDNlvfecm8HbywZtm5ACdmC7a-teqfMwJUaGFr8dC8l4KZuBPPE11GzwtZNQsIb_NJ6_K5YUlLpQpMF_8kdzSjpfmwyBDNTSuxfjLkBwBS0bFdHNuqYCbDEkpKLdlLAqwA83HEb_TDWC3Ypeyc-mZO67Igq14MZK3kVPmUxaO0LJxsrqok3-RGctq6Vyz0C3YAbR6siUv_JyMcF6I7z9-7d-7J-fBeRT6c3bp31-om-rrypK25NGqWrVUkK-g4H9o3f6IrTphvfIQp8T7LhaplJhAiDUphSppNWYtFZ2ui6qBpyQBy5wmzqriUtXekyDbeaWTjP-8MVHBU93WkaMyOgZf2o28g=w1893-h963-s-no?authuser=0" class="card-img-top" alt="Piano"/>
                        <div class="card-body">
                            <h5 class="card-title">Web Portfolio</h5>
                            <p class="card-text">
                            Web Portfolio made in React.js with the use of Tailwind CSS, React Bootstrap and Material UI library.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-black">
                        <div class="card-body">
                            <h5 class="card-title text-white text-4xl"> Coming Soon ... </h5>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Projects;