
function getEmptyFullMmtfDict(){
    return {
        // meta
        mmtfVersion: "",
        mmtfProducer: "",

        // header
        unitCell: [ 0, 0, 0, 0, 0, 0 ],
        spaceGroup: "",
        bioAssemblyList: [],
        structureId: "",
        title: "",
        date: "0000-00-00",
        entityList: [],

        experimentalMethods: [],
        resolution: 0,
        rFree: 0,
        rWork: 0,

        // counts
        numBonds: 0,
        numAtoms: 0,

        // lists
        groupList: [],

        // bonds
        bondAtomList: new Uint8Array( 0 ),
        bondOrderList: new Uint8Array( 0 ),

        // atoms
        xCoordBig: new Uint8Array( 0 ),
        xCoordSmall: new Uint8Array( 0 ),
        yCoordBig: new Uint8Array( 0 ),
        yCoordSmall: new Uint8Array( 0 ),
        zCoordBig: new Uint8Array( 0 ),
        zCoordSmall: new Uint8Array( 0 ),
        bFactorBig: new Uint8Array( 0 ),
        bFactorSmall: new Uint8Array( 0 ),
        atomIdList: new Uint8Array( 0 ),
        altLocList: [],
        occupancyList: new Uint8Array( 0 ),

        // groups
        groupIdList: new Uint8Array( 0 ),
        groupTypeList: new Uint8Array( 0 ),
        secStructList: new Uint8Array( 0 ),
        insCodeList: [],
        sequenceIdList: new Uint8Array( 0 ),

        // chains
        chainIdList: new Uint8Array( 0 ),
        chainNameList: new Uint8Array( 0 ),
        groupsPerChain: [],

        // models
        chainsPerModel: [],
    };
}

function getEmptyRequiredMmtfDict(){
    return {
        // meta
        mmtfVersion: "",
        mmtfProducer: "",

        // counts
        numBonds: 0,
        numAtoms: 0,

        // lists
        groupList: [],

        // atoms
        xCoordBig: new Uint8Array( 0 ),
        xCoordSmall: new Uint8Array( 0 ),
        yCoordBig: new Uint8Array( 0 ),
        yCoordSmall: new Uint8Array( 0 ),
        zCoordBig: new Uint8Array( 0 ),
        zCoordSmall: new Uint8Array( 0 ),

        // groups
        groupIdList: new Uint8Array( 0 ),
        groupTypeList: new Uint8Array( 0 ),

        // chains
        chainIdList: new Uint8Array( 0 ),
        groupsPerChain: [],

        // models
        chainsPerModel: [],
    };
}

function getFilledFullMmtfDict(){
    return {
        // meta
        mmtfVersion: "0.1",
        mmtfProducer: "unittest",

        // header
        unitCell: [ 10, 12, 30, 90, 90, 120 ],
        spaceGroup: "P1",
        bioAssemblyList: [
            {
                transforms: [
                    {
                        chainIdList: [ "A" ],
                        transformation: [
                            1, 0, 0, 0,
                            0, 1, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1
                        ]
                    }
                ]
            },
        ],
        structureId: "1XYZ",
        title: "Full Test",
        date: "2012-10-20",
        entityList: [
            {
                chainIndexList: [ 1 ],
                description: "Some Protein",
                sequence: "A",
                type: "polymer"
            }
        ],

        experimentalMethods: [ "X-RAY DIFFRACTION" ],
        resolution: 2.5,
        rFree: 0.7,
        rWork: 0.5,

        // counts
        numBonds: 1,
        numAtoms: 2,

        // lists
        groupList: [
            {
                atomCharges: [ 2, 1 ],
                atomInfo: [ "C", "C", "N", "N" ],
                bondIndices: [ 0, 1 ],
                bondOrders: [ 2 ],
                chemCompType: "L-PEPTIDE LINKING",
                singleLetterCode: "G",
                groupName: "GLY"
            }
        ],

        // bonds
        bondAtomList: new Uint8Array( new Int32Array( [ 0, 1, 0, 0 ] ).buffer ),
        bondOrderList: new Uint8Array( new Uint8Array( [ 2, 0 ] ).buffer ),

        // atoms
        xCoordBig: new Uint8Array( new Int32Array( [ 50000, 1 ] ).buffer ),
        xCoordSmall: new Uint8Array( new Int16Array( [ 2000 ] ).buffer ),
        yCoordBig: new Uint8Array( new Int32Array( [ 60000, 1 ] ).buffer ),
        yCoordSmall: new Uint8Array( new Int16Array( [ 3000 ] ).buffer ),
        zCoordBig: new Uint8Array( new Int32Array( [ 70000, 1 ] ).buffer ),
        zCoordSmall: new Uint8Array( new Int16Array( [ 4000 ] ).buffer ),
        bFactorBig: new Uint8Array( new Int32Array( [ 9999, 0, 1, 0 ] ).buffer ),
        bFactorSmall: new Uint8Array( new Int16Array( [] ).buffer ),
        atomIdList: new Uint8Array( new Int32Array( [ 1, 2 ] ).buffer ),
        altLocList: new Array( "A", 1, "B", 1 ),
        occupancyList: new Uint8Array( new Int32Array( [ 60, 1, 40, 1 ] ).buffer ),

        // groups
        groupIdList: new Uint8Array( new Int32Array( [ 100, 1 ] ).buffer ),
        groupTypeList: new Uint8Array( new Int32Array( [ 0 ] ).buffer ),
        secStructList: new Uint8Array( new Int8Array( [ -1 ] ).buffer ),
        insCodeList: new Array( "X", 1 ),
        sequenceIdList: new Uint8Array( new Int32Array( [ 0, 1 ] ).buffer ),

        // chains
        chainIdList: new Uint8Array( [ 0, 0, 68, 65 ] ),
        chainNameList: new Uint8Array( [ 0, 0, 0, 66 ] ),
        groupsPerChain: [ 1 ],

        // models
        chainsPerModel: [ 1 ],
    };
}

function getFilledRequiredMmtfDict(){
    return {
        // meta
        mmtfVersion: "0.1",
        mmtfProducer: "unittest",

        // counts
        numBonds: 1,
        numAtoms: 2,

        // lists
        groupList: [
            {
                atomCharges: [ 1, 0 ],
                atomInfo: [ "C", "C", "N", "N" ],
                bondIndices: [ 0, 1 ],
                bondOrders: [ 2 ],
                chemCompType: "L-PEPTIDE LINKING",
                singleLetterCode: "G",
                groupName: "GLY"
            }
        ],

        // atoms
        xCoordBig: new Uint8Array( new Int32Array( [ 10000, 1 ] ).buffer ),
        xCoordSmall: new Uint8Array( new Int16Array( [ 1000 ] ).buffer ),
        yCoordBig: new Uint8Array( new Int32Array( [ 20000, 1 ] ).buffer ),
        yCoordSmall: new Uint8Array( new Int16Array( [ 2000 ] ).buffer ),
        zCoordBig: new Uint8Array( new Int32Array( [ 30000, 1 ] ).buffer ),
        zCoordSmall: new Uint8Array( new Int16Array( [ 3000 ] ).buffer ),

        // groups
        groupIdList: new Uint8Array( new Int32Array( [ 100, 1 ] ).buffer ),
        groupTypeList: new Uint8Array( new Int32Array( [ 0 ] ).buffer ),

        // chains
        chainIdList: new Uint8Array( [ 0, 65, 0, 0 ] ),
        groupsPerChain: [ 1 ],

        // models
        chainsPerModel: [ 1 ],
    };
}